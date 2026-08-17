class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }

        let strObj = {};
        for(let chr of s){
           strObj[chr] = (strObj[chr] || 0) + 1; 
        }
        for(let chr of t){
            if(!strObj[chr]){
                return false;
            }
            strObj[chr]--;
        }
        return true;
    }
}
