import { useQuery } from "@tanstack/react-query";
import { fetchEvents, fetchEvent } from "@/lib/api/fetch-events";
import { APIResponseList, APIEvent } from "@/types/api";

export function useEvents(limit?: number) {
	return useQuery<APIResponseList>({
		queryKey: ["events", limit],
		queryFn: () => fetchEvents(limit),
	});
}

export function useEvent(uid: string) {
	return useQuery<APIEvent>({
		queryKey: ["event", uid],
		queryFn: () => fetchEvent(uid),
		enabled: !!uid, // Only fetch if uid is provided
	});
}
