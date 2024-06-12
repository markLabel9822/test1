export const formatDateLastPost = (dateString: Date): string => {
  const date = new Date(dateString);
  const today = new Date();
  const diffInDays = Math.floor(
    (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (diffInDays === 0) {
    const diffInHours = Math.floor(
      (Date.now() - date.getTime()) / (1000 * 60 * 60),
    );

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(
        (Date.now() - date.getTime()) / (1000 * 60),
      );
      return `${diffInMinutes} นาทีที่ผ่านมา`;
    } else {
      return `${diffInHours} ชั่วโมงที่ผ่านมา`;
    }
  } else {
    return `${diffInDays} วันที่ผ่านมา`;
  }
};

export const formatDateCreateAt = (dateString: Date): string => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits with leading zero if necessary
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed, so we add 1
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
