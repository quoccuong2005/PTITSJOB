export function formatMoney(amount: number, locale: string = "vi-VN", currency: string = "VND"): string {
    return amount.toLocaleString(locale, { style: "currency", currency });
}