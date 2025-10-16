// Persistent adapter (LocalStorage) - Same contract: load(), save(next), reset(), snapshot()
import { seedDoc } from "../model.js";
export class LocalStorageAdapter {
  #key;
  #stampOnSave;
  constructor({ key = "mockdb:doc", stampOnSave = true } = {}) {
    this.#key = key;
    this.#stampOnSave = stampOnSave;
    this.load = this.load.bind(this);
    this.save = this.save.bind(this);
    this.reset = this.reset.bind(this);
    this.snapshot = this.snapshot.bind(this);
  }
  #seedAndSave() {
    const d = seedDoc();
    localStorage.setItem(this.#key, JSON.stringify(d));
    return d;
  }
  async load() {
    try {
      const raw = localStorage.getItem(this.#key);
      return raw ? JSON.parse(raw) : this.#seedAndSave();
    } catch {
      // Corrupt JSON or inaccessible storage → reseed
      return this.#seedAndSave();
    }
  }
  #stamp(d) {
    d.rev = (d.rev ?? 0) + 1;
    d.updatedAt = new Date().toISOString();
  }
  async save(next) {
    if (this.#stampOnSave) this.#stamp(next);
    localStorage.setItem(this.#key, JSON.stringify(next));
  }
  // Remove the stored document (next load() will reseed)
  reset() {
    localStorage.removeItem(this.#key);
  }
  snapshot() {
    const raw = localStorage.getItem(this.#key);
    return raw ? JSON.parse(raw) : null;
  }
}
// Default instance (matches prior export style)
export const localStorageAdapter = new LocalStorageAdapter();
