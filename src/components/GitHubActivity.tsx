'use client';

import { useEffect, useState } from 'react';

type Contribution = {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
};

type ContributionsResponse = {
    total: Record<string, number>;
    contributions: Contribution[];
};

const GITHUB_USERNAME = 'itsmesiq';
const CONTRIBUTIONS_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;

const LEVEL_COLORS: Record<Contribution['level'], string> = {
    0: 'bg-[#1E1E1E] border-[#292929]',
    1: 'bg-[#0E4429] border-[#0E4429]',
    2: 'bg-[#006D32] border-[#006D32]',
    3: 'bg-[#26A641] border-[#26A641]',
    4: 'bg-[#39D353] border-[#39D353]',
};

function getContributionWeeks(contributions: Contribution[]) {
    if (contributions.length === 0) return [];

    const today = new Date();
    today.setHours(12, 0, 0, 0);

    const startDate = new Date(today);
    startDate.setMonth(startDate.getMonth() - 6);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const dates: Contribution[] = [];
    const contributionMap = new Map(
        contributions.map((contribution) => [contribution.date, contribution]),
    );

    for (let week = 0; week < 26; week++) {
        for (let day = 0; day < 7; day++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + week * 7 + day);

            const dateKey = [
                date.getFullYear(),
                String(date.getMonth() + 1).padStart(2, '0'),
                String(date.getDate()).padStart(2, '0'),
            ].join('-');

            const contribution = contributionMap.get(dateKey);

            dates.push(
                contribution ?? {
                    date: dateKey,
                    count: 0,
                    level: 0,
                },
            );
        }
    }

    return Array.from({ length: 26 }, (_, weekIndex) =>
        dates.slice(weekIndex * 7, weekIndex * 7 + 7),
    );
}

export function GitHubActivity() {
    const [contributions, setContributions] = useState<Contribution[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchContributions() {
            try {
                const response = await fetch(CONTRIBUTIONS_URL, {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch GitHub contributions');
                }

                const data: ContributionsResponse = await response.json();

                setContributions(data.contributions);
            } catch {
                if (!controller.signal.aborted) {
                    setError(true);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        void fetchContributions();

        return () => controller.abort();
    }, []);

    const weeks = getContributionWeeks(contributions);

    return (
        <div className="flex min-w-0 flex-col gap-6 sm:gap-x-8 xl:gap-x-16">
            <h3 className="text-base tracking-[1.5px] text-foreground">GitHub Activity</h3>

            <div className="w-full min-w-0">
                {loading ? (
                    <div
                        className="flex min-w-24 items-center justify-center text-sm text-muted"
                        role="status"
                    >
                        Loading contributions...
                    </div>
                ) : error || weeks.length === 0 ? (
                    <div className="flex min-w-24 items-center justify-center text-sm text-muted">
                        Unable to load GitHub Activity.
                    </div>
                ) : (
                    <div
                        className="grid grid-flow-col grid-rows-7 gap-1 overflow-hidden 2xl:w-fit"
                        role="img"
                        aria-label={`GitHub contributions activity for ${GITHUB_USERNAME} over the last six months.`}
                    >
                        {weeks.map((week, weekIndex) =>
                            week.map((day, dayIndex) => (
                                <div
                                    key={day.date || `empty-${weekIndex}-${dayIndex}`}
                                    className={`aspect-square min-w-0 rounded-[2px] border xl:rounded-[3px] 2xl:size-7 ${LEVEL_COLORS[day.level]}`}
                                    title={
                                        day.date
                                            ? `${day.count} contributions on ${day.date}`
                                            : undefined
                                    }
                                ></div>
                            )),
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
