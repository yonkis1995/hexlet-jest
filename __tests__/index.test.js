import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { test, expect } from '@jest/globals'

import reverse from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8')

test('should reverse simple string correctly', () => {
    expect(reverse('hello')).toEqual('olleh')
})

test('should work with empty string correctly', () => {
    expect(reverse('')).toEqual('')
})  

test('should reverse long string correctly', () => {
    const data = readFile('data.txt').trim()
    const result = readFile('result.txt').trim()
    expect(reverse(data)).toEqual(result)
})
