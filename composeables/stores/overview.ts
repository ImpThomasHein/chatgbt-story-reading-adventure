import { defineStore } from "pinia";

export const ADD_ENTRY = "ADD_ENTRY";

export interface Overview {
  id: number;
  title: String;
  date: Date;
  description: String;
  pointsReached: number;
}

export const useOverviewStore = defineStore("overView", {
  state: (): Overview[] => ({
    overViews: [],
    points: 5,
  }),
  actions: {
    [ADD_ENTRY](entry: Overview): void {
      this.overViews.push(entry);
    },
  },
  watch: {  
    overViews: {
      immediate: true,
      handler(): void {
        this.points = this.overViews.reduce(
          (total, entry) => total + entry.pointsReached,
          0
        );
      }
    }
  })
});
