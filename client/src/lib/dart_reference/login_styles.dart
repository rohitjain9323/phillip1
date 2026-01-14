import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class LoginStyles {
  static TextStyle heading = GoogleFonts.outfit(
    fontSize: 32,
    fontWeight: FontWeight.bold,
    color: Color(0xFF002395),
  );

  static InputDecoration inputDecoration(String hint, IconData icon) {
    return InputDecoration(
      hintText: hint,
      prefixIcon: Icon(icon),
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(12),
        borderSide: BorderSide(color: Color(0xFFE2E8F0)),
      ),
      filled: true,
      fillColor: Colors.white,
    );
  }
}
