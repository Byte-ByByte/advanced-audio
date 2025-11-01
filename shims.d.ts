// shims.d.ts

//% color="#FF8800" weight=100 icon="\uf028" block="Advanced Audio" advanced=true
declare namespace advancedAudio {

    export enum BlockingState {
        //% block="until done"
        Blocking,
        //% block="in background"
        Nonblocking
    }

    //% block
    class PCMAudio {
        length: number;
        private data: number[];

        //% group="Create"

        //% block="new PCM audio %audioTemplate"
        //% weight=1000
        //% shim=advancedAudio::audio_create
        static create(audioTemplate: number[]): PCMAudio;

        //% group="Playback"

        //% block="play audio %this %isBlocking"
        //% weight=900
        //% shim=advancedAudio::audio_start
        start(this: PCMAudio, isBlocking: BlockingState): void;

        //% block="stop audio %this %isBlocking"
        //% weight=800
        //% shim=advancedAudio::audio_stop
        stop(this: PCMAudio, isBlocking: BlockingState): void;

        //% group="Manipulation"

        //% block="get sample at %sampleLocation from %this"
        //% weight=700
        //% shim=advancedAudio::audio_getSample
        getSample(this: PCMAudio, sampleLocation: number): number;
    }
}
