class FlyingDino {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.speed = 5;
    }

    move(direction) {
        if (direction.up) this.y = Math.max(0, this.y - this.speed);
        if (direction.down) this.y = Math.min(canvas.height - this.height, this.y + this.speed);
        if (direction.left) this.x = Math.max(0, this.x - this.speed);
        if (direction.right) this.x = Math.min(canvas.width - this.width, this.x + this.speed);
    }

    draw(ctx) {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Coconut {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.speed = 7;
    }

    update(speedMultiplier = 1) {
        this.x += this.speed * speedMultiplier;
    }

    draw(ctx) {
        ctx.fillStyle = 'brown';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

class EnemyDino {
    constructor() {
        this.width = 40;
        this.height = 60;
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height - this.height);
        this.speed = 1.5; // Reduced speed
    }

    update(speedMultiplier = 1) {
        this.x -= this.speed * speedMultiplier;
    }

    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}