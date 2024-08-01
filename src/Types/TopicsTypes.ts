export interface Topic {
  id: number;
  title: string;
  videos: VideoType[];
}

export interface VideoType {
  id: number;
  title: string;
  description: string;
  url: string;
}

export type TopicsProps = {
  topics: Topic[];
};
