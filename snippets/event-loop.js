console.log('Starting')

setTimeout(() => {
    console.log('2 Second Timer')
}, 2000)

setTimeout(() =>{
    console.log('0 Second Timer')
}, 0)

console.log('Stopping')


/**
 * === Asynchronous process flow ===
 * 1. setTimeout(..., 2000) at Call Stack registers via `Node APIs` (afterward C++ world)
 * 2. Node APIs then hands over to Callback Queue
 * 3. Event Loop then moves Callback to Call Stack from Callback Queue
 * 4. get called at Call Stack (now it is back to js)
 */