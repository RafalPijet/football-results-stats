export const dateStringTodate = (date: string): Date => {
    const dateParts: number[] = date.split('/').map((item: string): number => parseInt(item));
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}