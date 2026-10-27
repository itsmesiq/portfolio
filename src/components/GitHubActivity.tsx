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

function getMonthLabel(weeks: Contribution[][]) {
    const labels = weeks.flatMap((week, index) => {
        const firstDay = week[0];

        if (!firstDay) return [];

        const date = new Date(`${firstDay.date}T12:00:00`);

        if (date.getDate() <= 7) {
            return [
                {
                    label: new Intl.DateTimeFormat('en', {
                        month: 'short',
                    }).format(date),
                    column: index,
                },
            ];
        }

        return [];
    });

    return labels.slice(-6);
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
        <div className="w-full min-w-0">
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
                        <div className="grid min-w-0 grid-cols-1 sm:grid-cols-1 xl:grid-cols-[auto_minmax(0,1fr)] xl:grid-rows-[16px_auto] xl:gap-x-2 xl:gap-y-2">
                            <div className="hidden grid-rows-7 gap-1 text-xs text-muted xl:col-start-1 xl:row-start-2 xl:grid">
                                {['Mon', '', 'Wed', '', 'Fri', '', 'Sun'].map((day, index) => (
                                    <span key={`${day}-${index}`} className="flex items-center">
                                        {day}
                                    </span>
                                ))}
                            </div>

                            <div className="relative mb-2 hidden h-4 text-xs text-muted sm:block xl:col-start-2 xl:row-start-1">
                                {getMonthLabel(weeks).map(({ label, column }) => (
                                    <span
                                        key={`${label}-${column}`}
                                        className="absolute"
                                        style={{ left: `${(column / weeks.length) * 100}%` }}
                                    >
                                        {label}
                                    </span>
                                ))}
                            </div>

                            <div
                                className="grid w-full min-w-0 grid-flow-col grid-cols-[repeat(26,minmax(0,1fr))] grid-rows-7 gap-1 xl:col-start-2 xl:row-start-2"
                                role="img"
                                aria-label={`GitHub contributions activity for ${GITHUB_USERNAME} over the last six months.`}
                            >
                                {weeks.map((week, weekIndex) =>
                                    week.map((day, dayIndex) => (
                                        <div
                                            key={day.date || `empty-${weekIndex}-${dayIndex}`}
                                            className={`aspect-square min-w-0 rounded-[2px] border xl:rounded-[3px] ${LEVEL_COLORS[day.level]}`}
                                            title={
                                                day.date
                                                    ? `${day.count} contributions on ${day.date}`
                                                    : undefined
                                            }
                                        ></div>
                                    )),
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-3 flex w-full min-w-0 items-center justify-end gap-2 text-sm text-muted">
                <span>Less</span>
                <div className="flex items-center gap-1">
                    <div
                        className={`size-2 rounded-[2px] border sm:size-3 lg:size-2 xl:size-3 ${LEVEL_COLORS[0]}`}
                    ></div>
                    <div
                        className={`size-2 rounded-[2px] border sm:size-3 lg:size-2 xl:size-3 ${LEVEL_COLORS[1]}`}
                    ></div>
                    <div
                        className={`size-2 rounded-[2px] border sm:size-3 lg:size-2 xl:size-3 ${LEVEL_COLORS[2]}`}
                    ></div>
                    <div
                        className={`size-2 rounded-[2px] border sm:size-3 lg:size-2 xl:size-3 ${LEVEL_COLORS[3]}`}
                    ></div>
                    <div
                        className={`size-2 rounded-[2px] border sm:size-3 lg:size-2 xl:size-3 ${LEVEL_COLORS[4]}`}
                    ></div>
                </div>
                <span>More</span>
            </div>
        </div>
    );
}
