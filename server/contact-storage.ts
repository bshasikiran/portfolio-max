import fs from 'fs';
import path from 'path';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

const CONTACT_FILE_PATH = path.join(process.cwd(), 'contact-messages.json');

// Initialize the contact messages file if it doesn't exist
function initContactStorage() {
  if (!fs.existsSync(CONTACT_FILE_PATH)) {
    fs.writeFileSync(CONTACT_FILE_PATH, JSON.stringify([], null, 2));
    console.log('Created contact storage file at:', CONTACT_FILE_PATH);
  }
}

// Save a contact message to the JSON file
export async function saveContactMessage(message: Omit<ContactMessage, 'id' | 'timestamp'>): Promise<boolean> {
  try {
    initContactStorage();
    
    // Read existing messages
    const rawData = fs.readFileSync(CONTACT_FILE_PATH, 'utf8');
    const messages: ContactMessage[] = JSON.parse(rawData);
    
    // Create new message with id and timestamp
    const newMessage: ContactMessage = {
      ...message,
      id: Math.random().toString(36).substring(2, 15),
      timestamp: new Date().toISOString()
    };
    
    // Add to messages and save
    messages.push(newMessage);
    fs.writeFileSync(CONTACT_FILE_PATH, JSON.stringify(messages, null, 2));
    
    console.log('Contact message saved successfully:', newMessage.subject);
    return true;
  } catch (error) {
    console.error('Error saving contact message:', error);
    return false;
  }
}

// Get all contact messages (most recent first)
export async function getContactMessages(): Promise<ContactMessage[]> {
  try {
    initContactStorage();
    
    const rawData = fs.readFileSync(CONTACT_FILE_PATH, 'utf8');
    const messages: ContactMessage[] = JSON.parse(rawData);
    
    // Sort by timestamp (newest first)
    return messages.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  } catch (error) {
    console.error('Error reading contact messages:', error);
    return [];
  }
}