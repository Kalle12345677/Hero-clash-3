INSERT INTO update_announcements (version, title, body)
VALUES (
  '2026-11-19-ausruestung',
  'Zielhilfe und neue Ausrüstung',
  'Tippe den Zieljoystick für einen schnellen Angriff oder ziehe ihn zum manuellen Zielen. Im Shop warten drei neue Waffen und zwei neue Panzer. Windläufer-Wams und Glutwacht gibt es über Rüstungsquests. Alle Waffen- und Rüstungsquestbelohnungen holst du ausschließlich bei ihrer Quest ab.'
)
ON CONFLICT (version) DO NOTHING;
