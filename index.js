// masks for each bit
const SOUND_MASK = 1 << 0;        // 00000001
const WIFI_MASK = 1 << 1;         // 00000010
const BLUETOOTH_MASK = 1 << 2;    // 00000100
const POWER_SAVING_MASK = 1 << 3; // 00001000

// function to enable a feature (set a bit)
const enableFeature = (state, mask) => {
    return state | mask;
}

// function to disable a feature (clear a bit)
const disableFeature = (state, mask) => {
    return state & ~mask;
}

// function to check if a feature is enabled
const isFeatureEnabled = (state, mask) => {
    return (state & mask) !== 0;
}

// initial device state (all features are disabled)
let deviceState = 0;

// Enable sound and Wi-Fi
deviceState = enableFeature(deviceState, SOUND_MASK);
deviceState = enableFeature(deviceState, WIFI_MASK);

// check if sound and Wi-Fi are enabled
console.log('Sound enabled:', isFeatureEnabled(deviceState, SOUND_MASK)); // true
console.log('Wi-Fi enabled:', isFeatureEnabled(deviceState, WIFI_MASK)); // true

// disable sound
deviceState = disableFeature(deviceState, SOUND_MASK);

// check the current state
console.log('Sound enabled:', isFeatureEnabled(deviceState, SOUND_MASK)); // false
console.log('Wi-Fi enabled:', isFeatureEnabled(deviceState, WIFI_MASK)); // true
