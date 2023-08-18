import { defineStore } from "pinia";

export const UPDATE_ENTRY = "UPDATE_ENTRY";
export const CREATE_NEW_STORY = "CREATE_NEW_STORY";

export interface Overview {
  id: number;
  title: String;
  date: Date;
  pointsReached: number;
  hasPlayed: boolean;
  story: String;
}

export const useOverviewStore = defineStore("overView", {
  state: (): Overview[] => ({
    overViews: [],
  }),
  getters: {
    points(): number {
      return this.overViews.reduce((acc, cur) => acc + cur.pointsReached, 0);
    },
    latestStory(): Overview {
      return this.overViews[this.overViews.length - 1];
    },
  },
  actions: {
    [UPDATE_ENTRY](entry: Overview): void {
      this.overViews.push(entry);
    },
    [CREATE_NEW_STORY](): void {
      const newEntry: Overview = {
        id: 20,
        title: "New Entry",
        date: new Date(),
        description: "New Description",
        pointsReached: 0,
        hasPlayed: false,
        story: "New Story",
      };

      this.overViews.push(newEntry);
    },
  },
});
