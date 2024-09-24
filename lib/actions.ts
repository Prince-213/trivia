"use server";

import { revalidatePath } from "next/cache";
import prisma from "./server/prisma";
import { assignPositions, getRandomUsers } from "./utils";

const maleAvatars = [
  "cubes-male-avatar (1).png",
  "cubes-male-avatar-1 (1).png",
  "flexy-man-avatar (1).png",
  "active-man-showing-thumb-up-avatar.png",
  "glossy-emoji-chat-bot-happy-smiling-1.png"
];

const femaleAvatars = [
  "flexy-woman-avatar.png",
  "active-woman-avatar-1.png",
  "active-woman-avatar-3.png",
  "pngwing.com (11).png",
  "pngwing.com (9).png"
];

export async function addStudent(formData: FormData) {
  const randomIndex = Math.floor(Math.random() * maleAvatars.length);

  const firstNname = formData.get("firstname");
  const lastName = formData.get("lastname");
  const grade = formData.get("class");
  const gender = formData.get("gender");

  const imageUrl =
    gender == "male" ? maleAvatars[randomIndex] : femaleAvatars[randomIndex];

  try {
    await prisma.student.create({
      data: {
        firstname: `${firstNname}`,
        lastname: `${lastName}`,
        gender: `${gender}`,
        grade: `${grade}`,
        imageUrl: `${imageUrl}`,
        points: 0
      }
    });

    console.log("Student created successfully!");
  } catch (error) {
    console.log(error);
  }
}

export async function shuffleContestants() {
  const data = await prisma.student.findMany();

  const randomContestants = getRandomUsers(data);

  const gradeRandomContestants = assignPositions(randomContestants);

  try {
    await prisma.trivia.createMany({
      data: [
        {
          firstname: gradeRandomContestants[0].firstname,
          lastname: gradeRandomContestants[0].lastname,
          grade: gradeRandomContestants[0].grade,
          gender: gradeRandomContestants[0].gender,
          points: 0,
          imageUrl: gradeRandomContestants[0].imageUrl
        },

        {
          firstname: gradeRandomContestants[1].firstname,
          lastname: gradeRandomContestants[1].lastname,
          grade: gradeRandomContestants[1].grade,
          gender: gradeRandomContestants[1].gender,
          points: 0,
          imageUrl: gradeRandomContestants[1].imageUrl
        },

        {
          firstname: gradeRandomContestants[2].firstname,
          lastname: gradeRandomContestants[2].lastname,
          grade: gradeRandomContestants[2].grade,
          gender: gradeRandomContestants[2].gender,
          points: 0,
          imageUrl: gradeRandomContestants[2].imageUrl
        },

        {
          firstname: gradeRandomContestants[3].firstname,
          lastname: gradeRandomContestants[3].lastname,
          grade: gradeRandomContestants[3].grade,
          gender: gradeRandomContestants[3].gender,
          points: 0,
          imageUrl: gradeRandomContestants[3].imageUrl
        },

        {
          firstname: gradeRandomContestants[4].firstname,
          lastname: gradeRandomContestants[4].lastname,
          grade: gradeRandomContestants[4].grade,
          gender: gradeRandomContestants[4].gender,
          points: 0,
          imageUrl: gradeRandomContestants[4].imageUrl
        }
      ]
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}
