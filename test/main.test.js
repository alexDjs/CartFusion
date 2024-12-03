import { describe, expect, beforeEach,test, vi } from 'vitest';
import { getCartData } from '../src/main.script.js';

describe('getCartData', () => {

    let mockLocalStorage;

    beforeEach(() => {
        // Creating an mock for localStorage
        mockLocalStorage = (() => {
            let store = {};
            return {
                getItem(key) {
                    return store[key] || null;
                },
                setItem(key, value) {
                    store[key] = value;
                },
                clear() {
                    store = {};
                }
            };
        })();

        // Замена глобального localStorage на наш мок
        vi.stubGlobal('localStorage', mockLocalStorage);
    });

    test('should return an empty object if localStorage is empty', () => {
        const result = getCartData();
        expect(result).toEqual({});
    });

    test('should return parsed cart data from localStorage', () => {
        const mockCartData = JSON.stringify({ item1: 'apple', item2: 'banana' });
        mockLocalStorage.setItem('cart', mockCartData);

        const result = getCartData();
        expect(result).toEqual({ item1: 'apple', item2: 'banana' });
    });

     test('should return an empty object if localStorage contains invalid JSON', () => {
        mockLocalStorage.setItem('cart', 'invalid-json');

        const result = getCartData();
        expect(result).toEqual({});
    });
});

