import {useEffect} from "react";

export default function Dots({style, ...rest}) {
    style = {
        position: "absolute",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        zIndex: "-10",
        overflow: "hidden",
        margin: "0 auto",
        ...style
    };

    useEffect(() => {
        var canvas = document.getElementById("canvasdots"),
            ctx = canvas.getContext("2d");

        var stars = [], // Array that contains the stars
            FPS = 240, // Frames per second
            x = 300; // Number of stars

        setTimeout(() => {
            canvas.style.width = window.innerWidth;
            canvas.width = window.innerWidth;

            // Push stars to array
            for (var i = 0; i < x; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1 + 1,
                    vx: Math.floor(Math.random() * 50) - 25,
                    vy: Math.floor(Math.random() * 50) - 25
                });
            }
        }, 100);

        var body = document.body,
            html = document.documentElement;

        // Draw the scene
        function draw() {
            var height = Math.max(
                body.offsetHeight,
                html.clientHeight,
                html.offsetHeight
            );

            canvas.style.height = height;
            canvas.height = height;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.globalCompositeOperation = "lighter";

            for (var i = 0, x = stars.length; i < x; i++) {
                var s = stars[i];
                ctx.fillStyle = "#fff";
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillStyle = "black";
                ctx.stroke();
            }

            ctx.beginPath();
            for (var i = 0; i < stars.length; i++) {
                var starI = stars[i];
                ctx.moveTo(starI.x, starI.y);

                for (var j = i; j < stars.length; j++) {
                    var starII = stars[j];
                    if (distance(starI, starII) < 150 * 150) {
                        ctx.lineTo(starII.x, starII.y);
                    }
                }
            }
            ctx.lineWidth = 0.05;
            ctx.strokeStyle = "white";
            ctx.stroke();
        }

        function distance(point1, point2) {
            var xs = 0;
            var ys = 0;

            xs = point2.x - point1.x;
            xs = xs * xs;

            ys = point2.y - point1.y;
            ys = ys * ys;

            return xs + ys;
        }

        // Update star locations

        function update() {
            for (var i = 0, x = stars.length; i < x; i++) {
                var s = stars[i];

                s.x += s.vx / FPS;
                s.y += s.vy / FPS;

                if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
                if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
            }
        }

        // Update and draw
        function tick() {
            draw();
            update();
            requestAnimationFrame(tick);
        }

        tick();
    }, []);

    return <canvas id="canvasdots" style={style} {...rest} />;
}
