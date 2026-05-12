import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kugkigynaxksusrbzyzq.supabase.co'

const supabaseKey = 'sb_publishable_4grmKbGVNDOd4E0hgTHixg_T027JZ0T'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)