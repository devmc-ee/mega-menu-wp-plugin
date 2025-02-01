export class EventEmitter {
  private listeners: { [key: string]: Function[] } = {};

  on(event: string, listener: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(listener);
  }

  emit(event: string, data: unknown) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(listener => listener(data));
    } else {
      throw new Error(`Event ${event} does not exist`);
    }
  }

  unsubscribe(event: string) {
    if (this.listeners[event]) {
      delete this.listeners[event];
    } else {
      throw new Error(`Event ${event} does not exist`);
    }
  }
}