import StatusLabel, {Status} from "@/app/components/status-label";
import React from "react";

export default function Home() {
    return (
        <main>
            <h1 className="text-xl">Home page</h1>
            <StatusLabel status={Status.Active}>Active</StatusLabel>
            <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
            <StatusLabel status={Status.Pending}>Pending</StatusLabel>
            <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
        </main>
    );
}
