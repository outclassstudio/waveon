// Based on the user provided API response

export interface APIEvent {
	uid: string;
	title: string;
	description: string;
	project_category: string;
	project_date?: string; // Appears in list, sometimes might be missing?
	start_date?: string; // Not explicitly seen in example, but useful fallback
	end_date?: string; // Not explicitly seen in example, but useful fallback
	project_time?: string;
	place?: string;
	staff?: string[];
	manager?: string;
	mc?: string[];
	performer?: string[];
	speaker?: string[];
	homepage?: string;
	video_url?: string;
	image_urls: string[]; // Array of strings in the new API
	created_at: string;
	updated_at: string;
	SK?: string;
	PK?: string;
}

export interface APIResponseList {
	items: APIEvent[];
	count: number;
	nextPageKey?: string;
	totalCount: number;
	hasMore: boolean;
}
