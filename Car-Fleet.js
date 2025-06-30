var carFleet = function(target, position, speed) {
    const n = position.length;
    if (n === 0) return 0;
    const cars = [];
    for (let i = 0; i < n; i++) {
        cars.push({ pos: position[i], speed: speed[i] });
    }
    cars.sort((a, b) => b.pos - a.pos);
    
    const stack = [];
    for (const car of cars) {
        const time = (target - car.pos) / car.speed;
        if (stack.length === 0 || time > stack[stack.length - 1]) {
            stack.push(time);
        }
    }
    
    return stack.length;
};