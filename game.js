class FlyingDino {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 80;
        this.speed = 5;
        this.image = new Image();
        this.image.src = 'flugdino.svg';
        this.loaded = false;
        this.image.onload = () => {
            this.loaded = true;
        };
    }

    move(direction) {
        if (direction.up) this.y = Math.max(0, this.y - this.speed);
        if (direction.down) this.y = Math.min(canvas.height - this.height, this.y + this.speed);
        if (direction.left) this.x = Math.max(0, this.x - this.speed);
        if (direction.right) this.x = Math.min(canvas.width - this.width, this.x + this.speed);
    }

    draw(ctx) {
        if (this.loaded) {
            // Speichere den aktuellen Kontext-Status
            ctx.save();
            
            // Spiegle das Bild horizontal für den Spieler-Dino, damit er nach rechts schaut
            ctx.translate(this.x + this.width, this.y);
            ctx.scale(-1, 1);
            
            // Zeichne das gespiegelte SVG-Bild
            ctx.drawImage(this.image, 0, 0, this.width, this.height);
            
            // Stelle den ursprünglichen Kontext-Status wieder her
            ctx.restore();
        } else {
            // Fallback, falls das Bild noch nicht geladen ist
            ctx.fillStyle = 'green';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
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
        this.width = 60;
        this.height = 60;
        this.x = canvas.width;
        this.y = Math.random() * (canvas.height - this.height);
        this.speed = 1.5;
        this.image = new Image();
        this.image.src = 'flugdino.svg';
        this.loaded = false;
        this.image.onload = () => {
            this.loaded = true;
        };
    }

    update(speedMultiplier = 1) {
        this.x -= this.speed * speedMultiplier;
    }

    draw(ctx) {
        if (this.loaded) {
            // Zeichne das SVG-Bild für den Gegner-Dino
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            // Fallback, falls das Bild noch nicht geladen ist
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}