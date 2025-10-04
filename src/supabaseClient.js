import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ksdqbgoypbvgbztikfkf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzZHFiZ295cGJ2Z2J6dGlrZmtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NDI5ODcsImV4cCI6MjA3NTExODk4N30.9Wn_qszZ8w4ik3lv6R1Sdxi6LF-o7GkOSmfbcwtPiUo'

export const supabase = createClient(supabaseUrl, supabaseKey)