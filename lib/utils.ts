export function getRandomUsers(users: Students[]) {
  // Create a shallow copy of the users array to avoid modifying the original array
  const shuffledUsers = [...users];

  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = shuffledUsers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledUsers[i], shuffledUsers[j]] = [shuffledUsers[j], shuffledUsers[i]];
  }

  // Return the first 5 users from the shuffled array
  return shuffledUsers.slice(0, 5);
}

export function assignPositions(users: Students[]) {
  // Sort users by points in descending order
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);

  // Assign positions from 1st to 5th
  const top5Users = sortedUsers.slice(0, 5).map((user, index) => {
    return {
      ...user,
      position: index + 1
    };
  });

  return top5Users;
}

// Example usage:
