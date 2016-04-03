import raf from 'raf'

export default class Video {
    
    constructor(opt) {

        this.video = opt.video
        this.canvas = opt.canvas
        this.context = this.canvas.getContext('2d')
        
        this.rAF = null
        this.playing = false
    }
    
    play() {
        
        this.rAF = raf(this.draw.bind(this))
        this.playing = true
    }
    
    pause() {
        
        raf.cancel(this.rAF)
        this.playing = false
    }
    
    draw() {
        
        if(!this.playing) return
        
        this.context.drawImage(this.video, 0, 0, this.bounding.width, this.bounding.height)
        this.rAF = raf(this.draw.bind(this))
    }
    
    resize() {

        this.bounding = this.video.getBoundingClientRect()

        this.canvas.style.width = `${this.bounding.width}px`
        this.canvas.style.height = `${this.bounding.height}px`
        
        this.canvas.width = this.bounding.width
        this.canvas.height = this.bounding.height
    }
}