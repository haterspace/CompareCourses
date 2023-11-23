import { CourseType } from "./courseType";

export type LikedCourseType = {
    id: number;
    userId: number;
    courseId: number;
    Course: CourseType;
}