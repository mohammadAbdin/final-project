export interface VideoType {
  _id?: string | undefined;
  title: string;
  description: string;
  url: string;
}
export interface Topic {
  _id?: string;
  title: string;
  videos: VideoType[];
}

export type TopicsProps = {
  topics: Topic[];
  classNumber: string | undefined;
};
