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
        // Main body - green
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.ellipse(this.x + this.width/2, this.y + this.height/2, this.width/2, this.height/3, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Head
        ctx.beginPath();
        ctx.ellipse(this.x + this.width * 0.8, this.y + this.height/3, this.width/4, this.height/6, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Neck
        ctx.beginPath();
        ctx.moveTo(this.x + this.width * 0.6, this.y + this.height/2);
        ctx.lineTo(this.x + this.width * 0.7, this.y + this.height/3);
        ctx.lineTo(this.x + this.width * 0.8, this.y + this.height/3);
        ctx.closePath();
        ctx.fill();
        
        // Tail
        ctx.beginPath();
        ctx.moveTo(this.x + this.width * 0.3, this.y + this.height/2);
        ctx.lineTo(this.x, this.y + this.height * 0.4);
        ctx.lineTo(this.x, this.y + this.height * 0.6);
        ctx.closePath();
        ctx.fill();
        
        // Legs
        ctx.fillRect(this.x + this.width * 0.3, this.y + this.height/2, this.width/10, this.height/2);
        ctx.fillRect(this.x + this.width * 0.7, this.y + this.height/2, this.width/10, this.height/2);
        
        // Eye
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(this.x + this.width * 0.85, this.y + this.height/3.5, 3, 0, Math.PI * 2);
        ctx.fill();
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
        // Main body - red
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.ellipse(this.x + this.width/2, this.y + this.height/2, this.width/2, this.height/3, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Head
        ctx.beginPath();
        ctx.ellipse(this.x + this.width * 0.2, this.y + this.height/3, this.width/4, this.height/6, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Neck
        ctx.beginPath();
        ctx.moveTo(this.x + this.width * 0.4, this.y + this.height/2);
        ctx.lineTo(this.x + this.width * 0.3, this.y + this.height/3);
        ctx.lineTo(this.x + this.width * 0.2, this.y + this.height/3);
        ctx.closePath();
        ctx.fill();
        
        // Tail
        ctx.beginPath();
        ctx.moveTo(this.x + this.width * 0.7, this.y + this.height/2);
        ctx.lineTo(this.x + this.width, this.y + this.height * 0.4);
        ctx.lineTo(this.x + this.width, this.y + this.height * 0.6);
        ctx.closePath();
        ctx.fill();
        
        // Legs
        ctx.fillRect(this.x + this.width * 0.3, this.y + this.height/2, this.width/10, this.height/2);
        ctx.fillRect(this.x + this.width * 0.7, this.y + this.height/2, this.width/10, this.height/2);
        
        // Eye
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(this.x + this.width * 0.15, this.y + this.height/3.5, 3, 0, Math.PI * 2);
        ctx.fill();
    }
}