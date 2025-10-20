export function formatDate(dateInput: Date | string): string {
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) return ""; // kiểm tra ngày hợp lệ

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 0-11
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}
