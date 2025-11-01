#include "pxt.h"
#include "advancedAudio.h"

using namespace pxt;

namespace advancedAudio {
    ManagedBuffer buffer;
    bool recording = false;

    void startRecording() {
        // Example: pretend to start microphone capture
        DMESG("Starting recording...");
        recording = true;
    }

    int stopRecording() {
        if (!recording)
            return 0;

        DMESG("Stopping recording...");
        recording = false;
        return 1024; // fake sample count
    }

    int getSample() {
        if (!recording)
            return 0;
        return uBit.random(1024); // mock random samples
    }
}
