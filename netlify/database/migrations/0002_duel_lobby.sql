INSERT INTO update_announcements (version, title, body)
VALUES (
  '2026-11-19-duel-lobby',
  'Die Duell-Lobby ist da',
  'Unter Freunde siehst du, wer gerade für ein Duell erreichbar ist. Nach einem Netzwechsel wird der Status neu geladen. Dein Held steht jetzt vor einer Arena-Kulisse, und Einladungen und Rundenergebnisse haben neue Animationen.'
)
ON CONFLICT (version) DO NOTHING;
