import raf from 'raf'
import performance from 'performance-now'

export default class Video {
    
    constructor(opt) {

        this.video = opt.video
        this.canvas = opt.canvas
        this.context = this.canvas.getContext('2d')
        
        this.fps = opt.fps || false
        this.interval = this.fps ? 1000/this.fps : undefined
        
        this.rAF = null
        this.playing = false
    }
    
    play() {
        
        this.perfs = this.fps ? {
            now: undefined,
            then: performance(),
            delta: undefined
        } : {}
        
        this.rAF = raf(this.draw.bind(this))
        this.playing = true
    }
    
    pause() {
        
        raf.cancel(this.rAF)
        this.playing = false
        
        delete this.perfs.now
        delete this.perfs.then
    }
    
    draw() {
        
        if(!this.playing) return
        
        this.rAF = raf(this.draw.bind(this))
        
        this.fps && (this.perfs.now = performance(), this.perfs.delta = this.perfs.now - this.perfs.then)
        
        if (!this.fps || this.perfs.delta > this.interval) {
            
            this.context.drawImage(this.video, 0, 0, this.bounding.width, this.bounding.height)
            this.fps && (this.perfs.then = this.perfs.now - (this.perfs.delta % this.interval))
        }
    }
    
    resize() {

        this.bounding = this.video.getBoundingClientRect()

        this.canvas.style.width = `${this.bounding.width}px`
        this.canvas.style.height = `${this.bounding.height}px`
        
        this.canvas.width = this.bounding.width
        this.canvas.height = this.bounding.height
    }
}