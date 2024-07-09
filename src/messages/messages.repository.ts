import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  // make it async cause we need to read files from harddrive
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {}

  async create(message: string) {}
}
