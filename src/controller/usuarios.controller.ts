/* eslint-disable prettier/prettier */
// usuarios.controller.ts
import { Controller, Get, Res } from '@nestjs/common';
import { UsuariosService } from '../services/usuarios.service';
import { Response } from 'express';
import * as ExcelJS from 'exceljs';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Get('exportar-excel')
  async exportarExcel(@Res() res: Response) {
    const usuarios = await this.usuariosService.findAll();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Usuarios');

    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Nombre', key: 'nombre', width: 30 },
      { header: 'Email', key: 'email', width: 30 },
    ];

    usuarios.forEach((usuario) => {
      worksheet.addRow({
        id: usuario.usuario_id,
        nombre: usuario.usuario_name,
        email: usuario.usuario_email,
      });
    });

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader('Content-Disposition', 'attachment; filename=usuarios.xlsx');

    const buffer = await workbook.xlsx.writeBuffer();
    res.send(buffer);
  }
}
