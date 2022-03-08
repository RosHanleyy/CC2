class BarChart {
    constructor(_data) {
        this.data = _data;
        this.posX = 50;
        this.posY = 400;
        this.showLabels = true;
        this.showValues = true;
        this.rotateLabels = false;
        this.margin = 10;
        this.spacing = 5;
        this.chartWidth = 300;
        this.chartHeight = 300;
        this.numTicks = 5;
        this.tickLength = 5;
        this.title = 'Game sales per platform (per million)';
        this.titleX = 150;
        this.titleY = 325;
        this.remainingSpace;
        this.barWidth;
        this.tickSpace;
        this.tickIncrement;
        this.maxValue;

        this.updateValues();
    }

    updateValues() {
        this.remainingSpace = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.remainingSpace / this.data.length;
        this.tickSpace = this.chartHeight / this.numTicks;
        let listValues = this.data.map(function(x) { return x.value });
        this.maxValue = max(listValues);
        this.tickIncrement = int(this.maxValue / this.numTicks);
    }

    render() {
        push();
        translate(this.posX, this.posY);
        this.drawTicks();
        this.drawBars();
        this.drawAxis();
        pop()
    }

    drawTicks() {

        textSize(20);
        fill(255);
        textAlign(CENTER, BOTTOM);
        text(this.title, this.titleX, -this.titleY);

        textSize(12);
        textAlign(RIGHT, CENTER);
        for (let i = 0; i <= this.numTicks; i++) {
            stroke(255, 100);
            strokeWeight(1);
            line(0, i * -this.tickSpace, -this.tickLength, i * -this.tickSpace);

            stroke(255, 40);
            strokeWeight(1);
            line(0, i * -this.tickSpace, this.chartWidth, i * -this.tickSpace);

            noStroke();
            fill(255, 100);
            text(i * this.tickIncrement, -10, -i * this.tickSpace);
        }
    }

    drawAxis() {
        translate(-this.margin, 0)
            //y Axis
        strokeWeight(1);
        stroke(255);
        line(0, 0, 0, -this.chartHeight);
        //x Axis
        strokeWeight(1);
        stroke(255);
        line(0, 0, this.chartWidth, 0);
    }

    scaledData(_num) {
        let newValue = map(_num, 0, this.maxValue, 0, this.chartHeight);
        return newValue;
    }

    drawBars() {
        translate(this.margin, 0)
        for (let i = 0; i < this.data.length; i++) {
            fill(colors[i % colors.length]);
            strokeWeight(0);
            rect(i * (this.barWidth + this.spacing), 0, this.barWidth, this.scaledData(-this.data[i].value));

            if (this.showValues) {
                noStroke();
                fill(255);
                textSize(12);
                textAlign(CENTER, BOTTOM);
                text(this.data[i].value, i * (this.barWidth + this.spacing) + this.barWidth / 2, this.scaledData(-this.data[i].value) - 3);
            }

            if (this.showLabels) {
                if(this.rotateLabels){
                    angleMode(DEGREES)
                    push()
                    noStroke();
                    fill(255);
                    textSize(12);
                    textAlign(LEFT, BOTTOM);
                    translate(i * (this.barWidth + this.spacing) + this.barWidth / 2, 10);
                    rotate(90)
                    text(this.data[i].label, 0,0);
                    pop()
                } else {
                    noStroke();
                    fill(255);
                    textSize(12);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].label, i * (this.barWidth + this.spacing) + this.barWidth / 2, 25);
                }
            }
        }
    }


}