const moodFunction = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const diffTime = now - createdDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 1) { return 'Happy' }
    else if (diffDays <= 3) { return 'Excited' }
    else { return 'Sad' }
}
export default moodFunction