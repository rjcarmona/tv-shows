import type { Show } from "@/types/Types";

export const sortList = (list: Show[]) => list?.sort((a: Show, b: Show) => b.rating.average - a.rating.average);

export const NotFoundTxt = `Try adjusting your search terms or filters. Sometimes less specific terms or broader queries can help you find what you're looking for.`;