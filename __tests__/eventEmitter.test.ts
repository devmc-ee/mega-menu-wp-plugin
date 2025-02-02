import { describe, expect, it } from '@jest/globals';
import { EventEmitter } from '../src/eventEmitters/EventEmitter';

describe('EventEmitter', () => {
	const emitter = new EventEmitter();

	describe('on subscribe', () => {
		it('should add a listener to the eventEmitter', () => {
			emitter.on('test', (data: unknown) => {
				expect(data).toBe('test');
			});

			emitter.emit('test', 'test');
		});
	});

	describe('on unsubscribe', () => {
		it('should remove listener from the eventEmitter', () => {
			emitter.on('test', (data: unknown) => {
				expect(data).toBe('test');
			});

			emitter.emit('test', 'test');

			emitter.unsubscribe('test');

			expect(() => emitter.emit('test', 'test')).toThrow(
				'Event test does not exist'
			);
		});
	});
});
