function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let last = m + n - 1;
    
    while(m > 0 && n > 0){
        const L1 = nums1[m - 1]; // last of nums1
        const L2 = nums2[n - 1]; // last of nums2
        
        if(L1 > L2) {
            nums1[last] = L1;
            m--;
        } else {
            nums1[last] = L2;
            n--;
        }
        last--;
    }

    while (n > 0) {
        const L2 = nums2[n - 1];
        nums1[last] = L2;
        n--;
        last--;
    }
};
