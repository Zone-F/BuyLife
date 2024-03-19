/** @type {import('next').NextConfig} */
import AutoImportPlugin from 'unplugin-auto-import/webpack';

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      AutoImportPlugin({
        eslintrc: {
          enabled: true, // <-- this
        },
        // Your auto import options go here
        imports: [
          'react',
          {
            '@mui/material': [
              'Button', 'ListItem', 'Checkbox', 'ListItemButton',
              'TextField', 'Input', 'Select', 'MenuItem', 'Paper',
              'ListItemIcon', 'ListItemText', 'Typography', 'Link', 'List',
              'Dialog', 'DialogTitle', 'DialogContent', 'DialogActions',
            ]
          }
        ],
        // other options...
      })
    )
    return config
  },
};

export default nextConfig;
