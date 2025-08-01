/* eslint-disable @typescript-eslint/no-explicit-any */
import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
})

export async function executeQuery<T = any>(
  query: string,
  values?: any[],
): Promise<T[]> {
  try {
    const [rows] = await pool.execute(query, values)
    return rows as T[]
  } catch (error) {
    console.error('Erro na query:', error)
    throw error
  }
}
