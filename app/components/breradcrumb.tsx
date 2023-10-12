"use client";

import React, { useEffect } from "react";
import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";
import Link from "next/link";

const breadcrumbNameMap: Record<string, string> = {
    "/programs": "Programs",
};

type Props = {
    pageTitle: string;
};

function BreadcrumbComponent({ pageTitle }: Props) {
    const pathName = usePathname();
    const pathSnippets = pathName.split("/").filter((i) => i);

    const breadcrumbItems = pathSnippets.map((segment, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
        let title = breadcrumbNameMap[url];

        // Check if the segment is dynamic (e.g., [id])
        if (
            !title &&
            segment.startsWith("[") &&
            index === pathSnippets.length - 1
        ) {
            title = segment.slice(1, -1); // Remove brackets [ ]
        }

        return {
            key: url,
            title: title ? <Link href={url}>{title}</Link> : segment,
        };
    });

    return (
        <div className="mb-5 pb-5">
            <p className="font-bold text-2xl mb-1 pb-1 uppercase">{pageTitle}</p>
            <Breadcrumb items={breadcrumbItems} />
        </div>
    );
}

export default BreadcrumbComponent;
