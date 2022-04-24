const a = [3, 3];

var twoSum = function (nums, target) {
  let map = new Map();
  nums.forEach((e, i) => {
    if (map.has(e)) {
      if (e + e == target) {
        return [map[e], i];
      }
    }
    if (map.has(target - e)) {
      return [map.get(target - e), i];
    } else {
      map.set(e, i);
    }
  });
  nums.sort((a, b) => a - b);
  let lb = 0;
  let ub = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let that = target - nums[i];
    while (lb <= ub) {
      var m = lb + Math.floor((ub - lb) / 2);
      if (nums[m] == that) {
        break;
      }
      if (nums[m] < that) {
        lb = m + 1;
      } else {
        ub = m - 1;
      }
    }
    if (nums[i] + nums[m] == target) {
      console.log([map.get(nums[i]), map.get(nums[m])]);
      return [map.get(nums[i]), map.get(nums[m])];
    }
  }
};

twoSum(a, 6);
