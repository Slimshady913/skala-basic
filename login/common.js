export function isEmpty(value) {
    // 1. null이나 undefined인 경우
    if (value === null || value === undefined) {
        return true;
    }

    // 2. 숫자인 경우 (보통 숫자는 0이어도 값이 존재하는 것으로 간주)
    if (typeof value === 'number') {
        return false;
    }

    // 3. 문자열이나 배열인 경우 (length 속성 확인)
    if (typeof value === 'string' || Array.isArray(value)) {
        return value.length === 0;
    }

    // 4. Map, Set인 경우 (size 속성 확인)
    if (value instanceof Map || value instanceof Set) {
        return value.size === 0;
    }

    // 5. 객체인 경우 (열거 가능한 자체 키가 있는지 확인)
    if (typeof value === 'object') {
        return Object.keys(value).length === 0;
    }

    return false;
}

export function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}