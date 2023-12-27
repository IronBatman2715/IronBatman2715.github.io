// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  type PageData = {
    name: string;
    subURL: string;
    description: string;
  };
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
