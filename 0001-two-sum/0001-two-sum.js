/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
// console.log(nums,target)

    // BRUTE FORCE 
    //   for(let i=0;i<nums.length;i++){
    //       for(let j=i+1;j<nums.length;j++){
    //           if(nums[j] + nums[i] === target)return [i,j]
    //      }  
    //   }  
    //   return [-1,-1]
    //TWO POINTERS

    // let left = 0, right = nums.length-1

    // while(left < right){
    //     if(nums[right] + nums[left] === target ) return [right,left]
    //     else if(nums[right] + nums[left] >  target ) right -- 
    //     else left ++
    // }
    // return [-1,-1]


    // USING OBJECT 
    let obj = {}

    for(let i=0;i<nums.length;i++){
     
            obj[nums[i]] = i
        
    }
    for(let i=0;i<nums.length;i++){
        let value = target-nums[i]

        if(obj[value] && obj[value]!== i) return [i,obj[value]] 
    }
    return [-1,-1]
    // let obj = {} 
    // for(let i = 0; i<nums.length; i++){
    //     // if(obj[nums[i]]==undefined){
    //         obj[nums[i]]=i
    //     // }
    // }  
    
    // for(let i = 0; i<nums.length; i++){
    //     let value=target-nums[i]
    //     if(obj[value] && obj[value]!=i){
    //          return [i,obj[value]]
    //     }
    // }  
};