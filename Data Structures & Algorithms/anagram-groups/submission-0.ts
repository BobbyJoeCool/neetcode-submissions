class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let output = new Map();
        for (const word of strs) {
            let key = word.toLowerCase()
                    .split('')
                    .sort()
                    .join('');
            if (!output.has(key)) {
                output.set(key, []);
            }
            output.get(key).push(word);
        }

        return [...output.values()];
    }
}