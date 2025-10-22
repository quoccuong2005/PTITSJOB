import axios1 from "axios";
import qs from 'qs';

export const axios = axios1.create({
    /**
     *
     * Trong Axios v0.21.x,
     * việc serialize params (đặc biệt là object và array) sử dụng một logic đơn giản, nội bộ Axios tự động flatten object thành query string giống qs.
     *
     * Từ Axios v1.0+,
     * họ bỏ cách serialize cũ và ủy thác toàn bộ cho URLSearchParams, theo chuẩn của trình duyệt – nhưng điều này không hỗ trợ lồng mảng hoặc object phức tạp, dẫn tới sort=%5Bobject%20Object%5D.
     */
    paramsSerializer: (params) => {
        const cleanedParams: Record<string, any> = {};
        Object.entries(params || {}).forEach(([key, value]) => {
            const isEmptyObject = typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0;
            const isEmptyArray = Array.isArray(value) && value.length === 0;
            if (value === undefined || value === null || isEmptyObject || isEmptyArray) return;

            cleanedParams[key] = Array.isArray(value)
                ? value.map((item) => JSON.stringify(item))
                : typeof value === 'object'
                    ? JSON.stringify(value)
                    : value;
        });

        return qs.stringify(cleanedParams, { encode: false, arrayFormat: 'brackets' });
    },
});
